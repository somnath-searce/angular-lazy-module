
define(function(){
	return {
		name: 'hire.job',
		files: {
			dev: [
				'hire/job/job.config',
				'hire/job/job.controller',
				'hire/job/job.service'
			],
			prod: ['hire/job/job.bundle']
		},
		states: [
			['hire.job', {
				url: '/job',
				template: '<p>{{msg}}</p>',
				controller: 'JobController'
			}]
		]
	}
});