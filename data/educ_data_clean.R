educationData = carData::States
gradData = read.csv('hsgrads1992.csv')
enrollmentData = read.csv('enrollment.csv')

fullEdData = cbind(educationData,
                     subset(gradData, select = -c(state)),
                     subset(enrollmentData, select = -c(state)))

netSAT = fullEdData$SATV + fullEdData$SATM
totalEnr = fullEdData$primaryEnr + fullEdData$seondaryEnr
fullEdData = cbind(fullEdData, netSAT)
fullEdData = cbind(fullEdData, totalEnr)

state = data.frame(rownames(fullEdData))
colnames(state) = c("state")
fullEdData = cbind(state, fullEdData)

fullEdData = rename(fullEdData, pctSAT = percent)
fullEdData = rename(fullEdData, spendPerStudent = dollars)



write.csv(fullEdData, "educData.csv", row.names = FALSE)
