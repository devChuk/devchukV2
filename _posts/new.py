import datetime

date = raw_input('Creating new file, enter ISO date (if today then just press Enter): ')
if len(date) == 0:
	print '\nDate set to: '
	date = datetime.date.today()
	print date
title = raw_input('\nEnter title: ')






print '\nFile is generated!'