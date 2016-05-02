module.exports = {
	attributes: {
		username: {
			type: 'string',
			required: true,
			unique: true,
			minLength: 5,
      		maxLength: 20
		},
		email: {
		  type: 'email',
		  required: true,
		  unique: true
		},
		password: {
			type: 'string',
			required: true,
			unique: true,
			minLength: 5,
      		maxLength: 20
		},
		firstName: {
			type: 'string',
			required: true,
			defaultsTo: ''
		},
		lastName: {
			type: 'string',
			required: true,
			defaultsTo: ''
		},
		phoneNumber: {
			type: 'string',
			required: true,
			defaultsTo: ''
		},
		companyName: {
			type: 'string',
			defaultsTo: ''
		},
		address: {
			type: 'string',
			required: true,
			defaultsTo: ''
		},
		postalCode: {
			type: 'string',
			required: true,
			defaultsTo: ''
		},
		cvrNumber: {
			type: 'string',
			required: true,
			defaultsTo: ''
		}
	}
}