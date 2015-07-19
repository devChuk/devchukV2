#Just a simple script to automate the YML frontmatter in new posts
import datetime
import os

date = raw_input('Creating new file, enter ISO date (if today then just press Enter): ')
if len(date) == 0:
	print '\nDate set to: '
	date = datetime.date.today()
	date = date.strftime('%Y-%m-%d')
	print date

title = raw_input('\nEnter title: ')

fileName= date + '-' + title.replace(" ", "_").lower() + '.md'
print fileName
file = open(fileName, "w")

file.write('---\nlayout: post\ntitle: ' + title + '\n---\n\n\n\n')

print '\nFile is generated!'

os.system("sublime-text " + fileName)