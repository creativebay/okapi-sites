/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { TextControl, PanelBody } from '@wordpress/components';

import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { placeholder, submitButtonLabel } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'test-block' ) }>
					<TextControl
                        label={ __(
                            'Placeholder',
                            'test-block'
                        ) }
                        value={ placeholder || 'Enter your email' }
                        onChange={ ( value ) =>
                            setAttributes( { placeholder: value } )
                        }
                    />
					<TextControl
                        label={ __(
                            'Submit button label',
                            'test-block'
                        ) }
                        value={ submitButtonLabel || 'Join us' }
                        onChange={ ( value ) =>
                            setAttributes( { submitButtonLabel: value } )
                        }
                    />
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<form class="newsletter-form" target="_blank" action="https://myokapi.com/newsletter-form" method="get">
					<input name="email" placeholder={placeholder} />
					<button type="submit">{submitButtonLabel}</button>
				</form>
			</div>
		</>
	);
}
