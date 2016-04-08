// Copyright 2012 Dmitry Monin. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Required Field Validator.
 * Verifies whether field value is not empty.
 */

goog.provide('morning.validation.RequiredFieldValidator');

goog.require('morning.validation.Validator');

/**
 * Required Field Validator
 *
 * @constructor
 * @param {string} fieldName
 * @param {string} errorMessage
 * @extends {morning.validation.Validator}
 */
morning.validation.RequiredFieldValidator = function(fieldName, errorMessage)
{
    goog.base(this, fieldName, errorMessage);
};

goog.inherits(morning.validation.RequiredFieldValidator,
    morning.validation.Validator);

/** @inheritDoc */
morning.validation.RequiredFieldValidator.prototype.validate = function(formData)
{
    if (!formData || typeof formData[this.fieldName] != 'string')
    {
        if (goog.DEBUG)
        {
            console.warn(formData, this.fieldName);
        }

        throw new Error('RequiredFieldValidator: Couldn\'t get control value for field ' + this.fieldName + '.');
    }
    this.isValid = !this.isEmpty(formData[this.fieldName]);

    this.dispatchEvent(morning.validation.Validator.EventType.VALIDATOR_COMPLETE);
};
