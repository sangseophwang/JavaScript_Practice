# 수학은 비대면강의입니다.
# ax + by = c
# dx + ey = f
# 공통으로 해당하는 x와 y 구하기
# 브루트포스

a, b, c, d, e, f = map(int, input().split())
for i in range(-999, 1000):
    for j in range(-999, 1000):
        if (a*i) + (b*j) == c and (d*i) + (e*j) == f:
            print(i, j)
