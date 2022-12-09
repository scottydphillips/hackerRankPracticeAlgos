'''
Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

Example

scores = [12, 24, 10, 24]

Scores are in the same order as the games played. She tabulates her results as follows:
                                     Count
    Game  Score  Minimum  Maximum   Min Max
     0      12     12       12       0   0
     1      24     12       24       0   1
     2      10     10       24       1   1
     3      24     10       24       1   1
Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.
'''

def breaking_records(scores):
  minimum = scores[0];
  min_count = 0;
  maximum = scores[0];
  max_count = 0;
  for score in scores:
    if score != maximum and score > maximum:
      maximum = score;
      max_count += 1;
    if score != minimum and score < minimum:
      minimum = score;
      min_count += 1;
  print([max_count, min_count]);
  return [max_count, min_count];

breaking_records([10, 5, 20, 20, 4, 5, 2, 25, 1]);