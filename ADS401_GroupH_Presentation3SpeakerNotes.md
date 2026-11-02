# ADS401 Presentation 3 - 3-Minute Speaker Notes

## Slide 1 - Title (10 seconds)

Good morning. We are Group H. In Presentation 2 we presented the usability design for the XJTLU Museum AI System. Today we explain how we turn the questionnaire and observation data into statistical evidence.

## Slide 2 - Study recap (25 seconds)

The study covers four tasks: starting the guide, asking an exhibit question, navigating to the next stop, and recovering from an unclear answer. We recruit 12 to 15 XJTLU students or staff. The final instrument is a 10-question bilingual Wenjuanxing survey, supported by a moderator observation sheet.

## Slide 3 - Data sources (25 seconds)

The survey records role, prior use, task completion, task ease, confidence, SUS, system ratings, barriers, and open feedback. The observation workbook records independent success, time on task, errors, assistance, and anonymised notes. We merge the two sources using the anonymous Participant ID. The Excel workbook automatically calculates task success and SUS.

## Slide 4 - Data preparation (30 seconds)

We export the survey data, merge it with the observation workbook, recode task outcomes, calculate SUS, and check missing values, duplicates, and outliers. For task success, independent completion is one; assisted or failed completion is zero for the primary success rate. The workbook applies the standard alternating-item SUS formula automatically.

## Slide 5 - Planned statistics (35 seconds)

H1 compares independent task success with an eighty percent criterion using a binomial test for each task separately. H2 compares SUS with the benchmark of sixty-eight using a one-sample test, or Wilcoxon if the data are non-normal. We report Cronbach's alpha for the SUS items. H3 uses exploratory Spearman correlations between task ease, confidence, SUS, and trust. Open responses are coded into barrier themes for H4.

## Slide 6 - Results (20 seconds)

The Wenjuanxing survey is live, but participant sessions are not complete. This slide is the reporting frame for the final results. We do not invent participant numbers. After collection, we will insert the actual task success rates, SUS, task ratings, and barrier frequencies from the Wenjuanxing dashboard and observation sheet.

## Slide 7 - Interpretation (15 seconds)

The final discussion will connect task success, SUS, task ratings, and qualitative themes to clear recommendations for onboarding, exhibit content, navigation, and recovery. Thank you. We welcome questions about the analysis or measures.

## Likely Q&A

- Why use a binomial test? It directly compares the observed success proportion with our prespecified 80% criterion.
- Why compare SUS with 68? It is a widely used benchmark for acceptable usability.
- Why report correlations as exploratory? The sample is small and not designed for causal inference.
- Why use both survey and observation data? Self-report explains experience; observation records what participants actually did.
- What if SUS is non-normal? Report Wilcoxon signed-rank instead of the one-sample t-test.
- How does Wenjuanxing help? It automatically summarises frequencies and charts and exports the data for SPSS.
- Why test each task separately? Repeated task observations from the same participant are not independent, so pooling all attempts would overstate the evidence.
