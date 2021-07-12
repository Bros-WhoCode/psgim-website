#polygon
i = 0
n = 10
p = "30px"
while i < 100:
    print(i, "% 100%, ", i + round(50/n, 2), "% ", "calc(100% - ", p, "), ", end="", sep="")
    i += 100//n
