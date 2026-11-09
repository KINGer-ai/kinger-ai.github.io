* ADS401 Group H - actual 30-response questionnaire analysis.
* Source Excel converted without changing response values; see mappings below.
SET UNICODE=ON.
OUTPUT NEW.
GET DATA
 /TYPE=TXT
 /FILE='ADS401_GroupH_questionnaire_clean_01.csv'
 /ENCODING='UTF8'
 /DELCASE=LINE
 /DELIMITERS="," 
 /ARRANGEMENT=DELIMITED
 /FIRSTCASE=2
 /VARIABLES=
  id A3
  consent F2.0
  recent F2.0
  ai F2.0
  role F2.0
  visits F2.0
  ai_freq F2.0
  engagement F2.0
  interest F2.0
  new_knowledge F2.0
  understanding F2.0
  reflection F2.0
  meaningful F2.0
  context F2.0
  emotional F2.0
  resonance F2.0.
DATASET NAME Questionnaire01.
VARIABLE LABELS
  ai 'Used AI museum guide (1=yes, 0=no)'
  role 'Student level'
  visits 'Prior museum visits'
  ai_freq 'General AI tool use frequency'
  engagement 'Q7: engagement in visit'
  interest 'Q8: interest throughout visit'
  new_knowledge 'Q9: learned new knowledge'
  understanding 'Q10: deepened understanding'
  reflection 'Q11: prompted reflection'
  meaningful 'Q12: visit felt meaningful'
  context 'Q13: linked to background knowledge'
  emotional 'Q14: emotional response'
  resonance 'Q15: resonance with theme'.
VALUE LABELS ai 0 'No AI guide' 1 'AI guide'
 /role 1 'Undergraduate' 2 'Postgraduate'
 /visits 1 'First visit' 2 '2-3 visits' 3 'Frequent visitor'
 /ai_freq 1 'Almost never' 2 'Occasionally' 3 'Weekly' 4 'Almost daily'.
EXECUTE.

* Check complete records and sample composition.
FREQUENCIES VARIABLES=consent recent ai role visits ai_freq engagement interest new_knowledge understanding reflection meaningful context emotional resonance.
CROSSTABS /TABLES=ai BY role visits ai_freq /CELLS=COUNT ROW.

* Descriptive statistics of each 1-5 response by AI-guide group.
SORT CASES BY ai.
SPLIT FILE LAYERED BY ai.
FREQUENCIES VARIABLES=engagement interest new_knowledge understanding reflection meaningful context emotional resonance
 /STATISTICS=MEAN MEDIAN STDDEV MINIMUM MAXIMUM.
SPLIT FILE OFF.

* Two-sided independent-samples Mann-Whitney U tests.
* Nine item tests are exploratory; interpret with Holm adjustment separately.
NPAR TESTS
 /M-W=engagement interest new_knowledge understanding reflection meaningful context emotional resonance BY ai(0 1)
 /MISSING ANALYSIS.

* Two-dimensional grouped mean bar chart for Q7-Q15.
DATASET COPY ChartData01.
DATASET ACTIVATE ChartData01.
VARSTOCASES
 /MAKE rating FROM engagement interest new_knowledge understanding reflection meaningful context emotional resonance
 /INDEX=item
 /KEEP=id ai
 /NULL=DROP.
VARIABLE LABELS ai 'Guide use'
 rating 'Mean rating (1-5)'
 item 'Questionnaire item'.
VALUE LABELS item
 1 'Q7 Engagement'
 2 'Q8 Interest'
 3 'Q9 New knowledge'
 4 'Q10 Understanding'
 5 'Q11 Reflection'
 6 'Q12 Meaningful visit'
 7 'Q13 Context link'
 8 'Q14 Emotional response'
 9 'Q15 Theme resonance'.
GRAPH /BAR(GROUPED)=MEAN(rating) BY item BY ai.

OUTPUT SAVE OUTFILE='ADS401_GroupH_SPSS_Output_01.spv'.

