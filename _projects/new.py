#Just a simple script to automate the YML frontmatter in new posts
import datetime
import os

title = raw_input('\nEnter title: ')
fileName= title.replace(" ", "_").lower() + '.md'
print fileName + '\n'

log = open('log.txt', 'r')
order = int(log.readline()) + 1

log.close()
log = open('log.txt', 'w')
log.write(str(order))

text = '---\nlayout: project\ntitle: '+title+'\ndescription: \ndate: \nimg: \ncategory: \norder: '+str(order)+'\n---\n\n\n\n'

file = open(fileName, "w")
file.write(text)

print '\nFile is generated!'

os.system("sublime-text " + fileName)