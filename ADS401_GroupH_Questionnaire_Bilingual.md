# Museum AI Guide Experience Survey

## Live Form

- Participant link: https://v.wjx.cn/vm/wnB4jG2.aspx
- Researcher dashboard: https://www.wjx.cn/report/397354359.aspx?sat=1
- Format: Chinese-English bilingual
- Main questions: Q1-Q15
- Current responses: 30

The survey compares two museum visit conditions: use of the museum's own AI guide
and a self-guided visit using museum labels only.

## Participant Information

This study is run by a student research group at Xi'an Jiaotong-Liverpool
University. It compares post-visit experience between the two tour conditions
and takes about five minutes. The questionnaire collects no names or student
numbers. Participation is voluntary and anonymous.

## Q1. Consent / 知情同意

我已阅读并理解以上信息，自愿参与。

I have read and understood the information above and agree to take part.

- 是 / Yes
- 否 / No

## Q2. Recent Visit / 最近参观

你刚刚完成了一次博物馆参观吗？

Did you just complete a museum visit?

- 是 / Yes
- 否 / No

## Q3. AI Guide Use / AI 导览使用

在刚才的参观中，你是否使用了博物馆自带的 AI 导览系统？

During your visit, did you use the museum's own AI guide system?

- 使用了 / Yes
- 没有使用 / No

## Q4. Role / 身份

你的身份是什么？

What is your role?

- 本科生 / Undergraduate
- 研究生 / Postgraduate
- 教职工 / Staff
- 校外访客 / External visitor

## Q5. Prior Museum Visits / 既往参观次数

这是你第几次参观这个博物馆？

How many times have you visited this museum?

- 第一次 / First visit
- 2-3 次 / 2-3 visits
- 经常来 / Regularly

## Q6. AI Tool Use / AI 工具使用频率

你平时使用 AI 聊天工具的频率如何？

How often do you normally use AI chat tools?

- 几乎不用 / Almost never
- 偶尔 / Occasionally
- 每周 / Weekly
- 几乎每天 / Almost daily

## Q7-Q15. Post-Visit Experience Ratings

请按 1-5 分评价以下陈述。1 = 很不同意，5 = 很同意。

Rate each statement from 1 to 5. 1 = strongly disagree, 5 = strongly agree.

### Q7. Engagement / 参观投入

我觉得这次参观很吸引人，我沉浸其中。

The visit was engaging; I felt absorbed.

### Q8. Interest / 全程兴趣

我全程都很有兴致，没有感到无聊。

I stayed interested throughout.

### Q9. New Knowledge / 学到新知识

这次参观让我学到了新的东西。

I learned something new.

### Q10. Understanding / 加深理解

参观让我对展项有了更深入的理解。

The visit deepened my understanding of the exhibits.

### Q11. Reflection / 引发思考

参观引发了我思考，或让我想进一步了解。

The visit made me think and want to learn more.

### Q12. Meaning / 参观意义

这次参观对我来说是有意义的。

The visit was meaningful to me.

### Q13. Context / 联系背景

我能把展项和它的背景故事联系起来。

I could connect the exhibits to their context.

### Q14. Emotional Response / 情感触动

我对某些展项产生了情感上的触动。

Some exhibits moved me emotionally.

### Q15. Theme Resonance / 主题共鸣

参观让我对博物馆的主题产生了共鸣。

The visit connected me to the museum's theme.

## Data Mapping

- `consent`: Q1
- `recent`: Q2
- `ai`: Q3, recoded as AI guide = 1 and no AI guide = 0
- `role`: Q4
- `visits`: Q5
- `ai_freq`: Q6
- `engagement` to `resonance`: Q7-Q15

## Analysis

The final analysis uses two-sided Mann-Whitney U tests for the nine Q7-Q15
ratings, followed by Holm correction across the nine exploratory comparisons.
The report does not use SUS or task-success measures because the final dataset
does not contain them.
