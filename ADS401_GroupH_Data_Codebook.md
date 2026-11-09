# ADS401 Group H Final Data Codebook

## Dataset

- Rows: 30 anonymous participants
- Identifier: `id`, R01-R30
- AI-guide group: 15
- No-AI comparison group: 15

## Variables

| Variable | Code | Meaning |
|---|---|---|
| `id` | R01-R30 | Anonymous participant identifier |
| `consent` | 1 | Participant agreed to take part |
| `recent` | 1 | Participant confirmed a recent museum visit |
| `ai` | 0 | Did not use the museum AI guide |
| `ai` | 1 | Used the museum AI guide |
| `role` | 1 | Undergraduate |
| `role` | 2 | Postgraduate |
| `visits` | 1 | First visit |
| `visits` | 2 | 2-3 previous visits |
| `visits` | 3 | Regular visitor |
| `ai_freq` | 1 | AI chat tools: almost never |
| `ai_freq` | 2 | AI chat tools: occasionally |
| `ai_freq` | 3 | AI chat tools: weekly |
| `ai_freq` | 4 | AI chat tools: almost daily |

## Outcome Variables

All outcome variables use 1 = strongly disagree and 5 = strongly agree.

| Variable | Questionnaire item |
|---|---|
| `engagement` | Q7: The visit was engaging; I felt absorbed |
| `interest` | Q8: I stayed interested throughout |
| `new_knowledge` | Q9: I learned something new |
| `understanding` | Q10: The visit deepened my understanding |
| `reflection` | Q11: The visit made me think and want to learn more |
| `meaningful` | Q12: The visit was meaningful to me |
| `context` | Q13: I connected the exhibits to their context |
| `emotional` | Q14: Some exhibits moved me emotionally |
| `resonance` | Q15: The visit connected me to the museum's theme |

## Analysis Direction

The no-AI group is the reference group for the Mann-Whitney U statistic.
Positive rank-biserial values favour the AI group. The nine tests are
exploratory and receive Holm correction.
