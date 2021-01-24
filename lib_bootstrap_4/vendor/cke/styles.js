/**
 * Copyright (c) 2021, Dirk Grebe. All rights reserved.
 */

CKEDITOR.stylesSet.add( 'bootstrap', [
	/* Block Styles */

	{ name: 'Jumbotron',	  	element: 'div', attributes: { 'class': 'jumbotron' } },
	{ name: 'BG Primary',	  	element: 'div', attributes: { 'class': 'bg-primary text-white' } },
	{ name: 'BG Secondary',	  	element: 'div', attributes: { 'class': 'bg-secondary text-white' } },
	{ name: 'BG Success',	  	element: 'div', attributes: { 'class': 'bg-success text-white' } },
	{ name: 'BG Danger',	  	element: 'div', attributes: { 'class': 'bg-danger text-white' } },
	{ name: 'BG Warning',	  	element: 'div', attributes: { 'class': 'bg-warning text-dark' } },
	{ name: 'BG Info',	  		element: 'div', attributes: { 'class': 'bg-info text-dark' } },
	{ name: 'BG Light',	  		element: 'div', attributes: { 'class': 'bg-light text-dark' } },
	{ name: 'BG Dark',	  		element: 'div', attributes: { 'class': 'bg-dark text-white' } },

	{ name: 'Text Primary',  	element: 'p', attributes: { 'class': 'text-primary' } },
	{ name: 'Text Secondary',   element: 'p', attributes: { 'class': 'text-secondary' } },
	{ name: 'Text Success',  	element: 'p', attributes: { 'class': 'text-success' } },
	{ name: 'Text Danger',  	element: 'p', attributes: { 'class': 'text-danger' } },
	{ name: 'Text Warning',  	element: 'p', attributes: { 'class': 'text-warning' } },
	{ name: 'Text Info', 	 	element: 'p', attributes: { 'class': 'text-info' } },
	{ name: 'Text Light',  	    element: 'p', attributes: { 'class': 'bg-dark text-light' } },
	{ name: 'Text Dark', 	 	element: 'p', attributes: { 'class': 'text-dark' } },
		
	{ name: 'Alert Primary',  	element: 'p', attributes: { 'class': 'alert alert-primary' } },
	{ name: 'Alert Secondary',  element: 'p', attributes: { 'class': 'alert alert-secondary' } },
	{ name: 'Alert Success',  	element: 'p', attributes: { 'class': 'alert alert-success' } },
	{ name: 'Alert Danger',  	element: 'p', attributes: { 'class': 'alert alert-danger' } },
	{ name: 'Alert Warning',  	element: 'p', attributes: { 'class': 'alert alert-warning' } },
	{ name: 'Alert Info', 	 	element: 'p', attributes: { 'class': 'alert alert-info' } },
	{ name: 'Alert Light',  	element: 'p', attributes: { 'class': 'alert alert-light' } },
	{ name: 'Alert Dark', 	 	element: 'p', attributes: { 'class': 'alert alert-dark' } },
	
	{ name: 'Alert Primary',  	element: 'h3', attributes: { 'class': 'alert alert-primary' } },
	{ name: 'Alert Secondary',  element: 'h3', attributes: { 'class': 'alert alert-secondary' } },
	{ name: 'Alert Success',  	element: 'h3', attributes: { 'class': 'alert alert-success' } },
	{ name: 'Alert Danger',  	element: 'h3', attributes: { 'class': 'alert alert-danger' } },
	{ name: 'Alert Warning',  	element: 'h3', attributes: { 'class': 'alert alert-warning' } },
	{ name: 'Alert Info', 	 	element: 'h3', attributes: { 'class': 'alert alert-info' } },
	{ name: 'Alert Light',  	element: 'h3', attributes: { 'class': 'alert alert-light' } },
	{ name: 'Alert Dark', 	 	element: 'h3', attributes: { 'class': 'alert alert-dark' } },

	{ name: 'Alert Primary',  	element: 'h2', attributes: { 'class': 'alert alert-primary' } },
	{ name: 'Alert Secondary',  element: 'h2', attributes: { 'class': 'alert alert-secondary' } },
	{ name: 'Alert Success',  	element: 'h2', attributes: { 'class': 'alert alert-success' } },
	{ name: 'Alert Danger',  	element: 'h2', attributes: { 'class': 'alert alert-danger' } },
	{ name: 'Alert Warning',  	element: 'h2', attributes: { 'class': 'alert alert-warning' } },
	{ name: 'Alert Info', 	 	element: 'h2', attributes: { 'class': 'alert alert-info' } },
	{ name: 'Alert Light',  	element: 'h2', attributes: { 'class': 'alert alert-light' } },
	{ name: 'Alert Dark', 	 	element: 'h2', attributes: { 'class': 'alert alert-dark' } },

	{ name: 'Alert Primary',  	element: 'h1', attributes: { 'class': 'alert alert-primary' } },
	{ name: 'Alert Secondary',  element: 'h1', attributes: { 'class': 'alert alert-secondary' } },
	{ name: 'Alert Success',  	element: 'h1', attributes: { 'class': 'alert alert-success' } },
	{ name: 'Alert Danger',  	element: 'h1', attributes: { 'class': 'alert alert-danger' } },
	{ name: 'Alert Warning',  	element: 'h1', attributes: { 'class': 'alert alert-warning' } },
	{ name: 'Alert Info', 	 	element: 'h1', attributes: { 'class': 'alert alert-info' } },
	{ name: 'Alert Light',  	element: 'h1', attributes: { 'class': 'alert alert-light' } },
	{ name: 'Alert Dark', 	 	element: 'h1', attributes: { 'class': 'alert alert-dark' } },


	/* Inline Styles */

	{ name: 'Badge Primary',  	element: 'span', attributes: { 'class': 'badge badge-primary' } },
	{ name: 'Badge Primary',  	element: 'span', attributes: { 'class': 'badge badge-pill badge-primary' } },
	{ name: 'Badge Secondary',  element: 'span', attributes: { 'class': 'badge badge-secondary' } },
	{ name: 'Badge Secondary', 	element: 'span', attributes: { 'class': 'badge badge-pill badge-secondary' } },
	{ name: 'Badge Success',  	element: 'span', attributes: { 'class': 'badge badge-success' } },
	{ name: 'Badge Success', 	element: 'span', attributes: { 'class': 'badge badge-pill badge-success' } },
	{ name: 'Badge Danger',  	element: 'span', attributes: { 'class': 'badge badge-danger' } },
	{ name: 'Badge Danger', 	element: 'span', attributes: { 'class': 'badge badge-pill badge-danger' } },
	{ name: 'Badge Warning',  	element: 'span', attributes: { 'class': 'badge badge-warning' } },
	{ name: 'Badge Warning', 	element: 'span', attributes: { 'class': 'badge badge-pill badge-warning' } },
	{ name: 'Badge Info',  		element: 'span', attributes: { 'class': 'badge badge-info' } },
	{ name: 'Badge Info', 		element: 'span', attributes: { 'class': 'badge badge-pill badge-info' } },
	{ name: 'Badge Light',  	element: 'span', attributes: { 'class': 'badge badge-light' } },
	{ name: 'Badge Light', 		element: 'span', attributes: { 'class': 'badge badge-pill badge-light' } },
	{ name: 'Badge Dark',  		element: 'span', attributes: { 'class': 'badge badge-dark' } },
	{ name: 'Badge Dark', 		element: 'span', attributes: { 'class': 'badge badge-pill badge-dark' } },

	/* Object Styles */
	
	{ name: 'Table striped',  		element: 'table', attributes: { 'class': 'table-striped' } },
	{ name: 'Table Dark',  			element: 'table', attributes: { 'class': 'table-dark' } },
	{ name: 'Table Dark striped',  	element: 'table', attributes: { 'class': 'table-dark table-striped' } },
	{ name: 'Table Primary',  		element: 'tr', attributes: { 'class': 'table-primary' } },
	{ name: 'Table Secondary',  	element: 'tr', attributes: { 'class': 'table-secondary' } },
	{ name: 'Table Success',  		element: 'tr', attributes: { 'class': 'table-success' } },
	{ name: 'Table Danger',  		element: 'tr', attributes: { 'class': 'table-danger' } },
	{ name: 'Table Warning',  		element: 'tr', attributes: { 'class': 'table-warning' } },
	{ name: 'Table Info',  			element: 'tr', attributes: { 'class': 'table-info' } },
	{ name: 'Table Light',  		element: 'tr', attributes: { 'class': 'table-Light' } },
	{ name: 'Table Dark',  			element: 'tr', attributes: { 'class': 'table-dark' } },

] );

CKEDITOR.config.format_tags = 'h1;display1;display2;display3;display4;h2;h3;h4;h5;h6;div;p;lead;muted';
CKEDITOR.config.format_display1={name: 'Display 1', element: 'h1', attributes: { 'class': 'display-1' }};
CKEDITOR.config.format_display2={name: 'Display 2', element: 'h1', attributes: { 'class': 'display-2' }};
CKEDITOR.config.format_display3={name: 'Display 3', element: 'h1', attributes: { 'class': 'display-3' }};
CKEDITOR.config.format_display4={name: 'Display 4', element: 'h1', attributes: { 'class': 'display-4' }};
CKEDITOR.config.format_lead={name: 'Lead', element: 'p', attributes: { 'class': 'lead' }};
CKEDITOR.config.format_muted={name: 'Muted', element: 'p', attributes: { 'class': 'text-muted' }};
