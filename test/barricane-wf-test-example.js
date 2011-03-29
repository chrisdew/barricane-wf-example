// Copyright (c) 2011 Barricane Technology Ltd., All Rights Reserved.
// Released under the MIT open source licence.

var vows = require('vows')
  , assert = require('assert')
  , wf = require('../lib/barricane-wf')
  ;

var suite = vows.describe('Hello World').addBatch(
	    { 'Hello World'
	    : { topic
	      : wf
	      , 'test value'
	      : function(topic) { assert.deepEqual(topic.helloWorld, 'Hello World'); }
	      }
	    } )

suite.export(module);