* ADS401 Group H - XJTLU Museum AI System usability analysis.
* Purpose: merge Wenjuanxing survey data with moderator observation data.
* Code independent task success as 1 and assisted/failed as 0.

VARIABLE LABELS
  participant_id 'Anonymous participant ID'
  role 'Student or staff'
  prior_use 'Prior XJTLU Museum AI System use'
  task1_outcome 'Task 1 independent success (1/0)'
  task1_time_sec 'Task 1 time in seconds'
  task1_ease 'Task 1 ease rating 1-7'
  task1_confidence 'Task 1 confidence rating 1-7'
  task2_outcome 'Task 2 independent success (1/0)'
  task2_time_sec 'Task 2 time in seconds'
  task2_ease 'Task 2 ease rating 1-7'
  task2_confidence 'Task 2 confidence rating 1-7'
  task3_outcome 'Task 3 independent success (1/0)'
  task3_time_sec 'Task 3 time in seconds'
  task3_ease 'Task 3 ease rating 1-7'
  task3_confidence 'Task 3 confidence rating 1-7'
  task4_outcome 'Task 4 independent success (1/0)'
  task4_time_sec 'Task 4 time in seconds'
  task4_ease 'Task 4 ease rating 1-7'
  task4_confidence 'Task 4 confidence rating 1-7'
  sus01 TO sus10 'Raw SUS items 1-5'
  start_clarity 'Start clarity 1-7'
  content_relevance 'Exhibit content relevance 1-7'
  navigation_clarity 'Navigation clarity 1-7'
  recovery_confidence 'Recovery confidence 1-7'
  trust 'Trust rating 1-7'
  cognitive_load 'Cognitive load 1-7'
  barrier 'Main obstacle category'
  content_feedback 'Open feedback on exhibit information'
  improvement_feedback 'Open improvement suggestion'.

VALUE LABELS
  role
    1 'Student'
    2 'Staff'
    3 'Other'
  prior_use
    1 'No'
    2 'Once'
    3 'More than once'
  task1_outcome task2_outcome task3_outcome task4_outcome
    1 'Independent success'
    0 'Assisted or failed'
  barrier
    1 'No obstacle'
    2 'Starting the guide'
    3 'Exhibit information'
    4 'Navigation to next stop'
    5 'Unclear AI answer'
    6 'Submitting a question'
    7 'Technical issue'
    8 'Other'.

* Compute overall task success.
COMPUTE task_success_count =
  SUM(task1_outcome, task2_outcome, task3_outcome, task4_outcome).
COMPUTE task_success_rate = task_success_count / 4.
EXECUTE.

* Compute the standard SUS total.
COMPUTE sus_adj01 = sus01 - 1.
COMPUTE sus_adj02 = 5 - sus02.
COMPUTE sus_adj03 = sus03 - 1.
COMPUTE sus_adj04 = 5 - sus04.
COMPUTE sus_adj05 = sus05 - 1.
COMPUTE sus_adj06 = 5 - sus06.
COMPUTE sus_adj07 = sus07 - 1.
COMPUTE sus_adj08 = 5 - sus08.
COMPUTE sus_adj09 = sus09 - 1.
COMPUTE sus_adj10 = 5 - sus10.
COMPUTE sus_total =
  SUM(sus_adj01, sus_adj02, sus_adj03, sus_adj04, sus_adj05,
      sus_adj06, sus_adj07, sus_adj08, sus_adj09, sus_adj10) * 2.5.
EXECUTE.

* Descriptive statistics.
DESCRIPTIVES
  /VARIABLES=task_success_rate
    task1_time_sec task2_time_sec task3_time_sec task4_time_sec
    task1_ease task2_ease task3_ease task4_ease
    task1_confidence task2_confidence task3_confidence task4_confidence
    sus_total start_clarity content_relevance navigation_clarity
    recovery_confidence trust cognitive_load
  /STATISTICS=MEAN STDDEV MIN MAX.

* Barrier frequencies.
FREQUENCIES VARIABLES=barrier /ORDER=ANALYSIS.

* Internal consistency of the ten SUS items.
RELIABILITY
  /VARIABLES=sus01 sus02 sus03 sus04 sus05 sus06 sus07 sus08 sus09 sus10
  /SCALE('SUS') ALL
  /MODEL=ALPHA
  /STATISTICS=DESCRIPTIVE SCALE.

* H1: independent success against an 80% criterion.
NPAR TESTS
  /BINOMIAL(0.8)=task1_outcome task2_outcome task3_outcome task4_outcome
  /MISSING ANALYSIS.

* H2: SUS against the benchmark of 68.
* Use a one-sample t-test when the distribution is approximately normal.
T-TEST
  /TESTVAL=68
  /VARIABLES=sus_total
  /CRITERIA=CI(.95)
  /MISSING=ANALYSIS.

* If SUS is non-normal, use a paired Wilcoxon comparison with a constant benchmark.
COMPUTE sus_benchmark = 68.
EXECUTE.
NPAR TESTS
  /WILCOXON=sus_total WITH sus_benchmark (PAIRED)
  /MISSING ANALYSIS.

* Exploratory associations among task experience, SUS, and trust.
NONPAR CORR
  /VARIABLES=task1_ease task2_ease task3_ease task4_ease
    task1_confidence task2_confidence task3_confidence task4_confidence
    sus_total trust
  /PRINT=SPEARMAN TWOTAIL NOSIG
  /MISSING=PAIRWISE.

* Before interpretation, inspect distributions, missingness, duplicate IDs, and outliers.
