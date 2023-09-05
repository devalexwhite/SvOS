import Icon from '../types/Icon';
import Mimetype from '../types/Mimetype';

export const Mimetypes: Map<string, Mimetype> = new Map([
	[
		'unknown',
		{
			name: 'Unknown',
			icon: {
				category: 'mimetypes',
				name: 'unknown'
			}
		}
	],
	[
		'.json',
		{
			name: 'JSON Document',
			launch: 'org.apps.editor',
			icon: {
				category: 'mimetypes',
				name: 'application-json'
			}
		}
	],
	[
		'.gif',
		{
			name: 'GIF Image',
			launch: 'org.apps.imageviewer',
			icon: {
				category: 'mimetypes',
				name: 'application-image-gif'
			}
		}
	],
	[
		'.svg',
		{
			name: 'SVG Image',
			launch: 'org.apps.imageviewer',
			icon: {
				category: 'mimetypes',
				name: 'application-images'
			}
		}
	],
	[
		'.jpg',
		{
			name: 'JPG Image',
			launch: 'org.apps.imageviewer',
			icon: {
				category: 'mimetypes',
				name: 'application-image-jpg'
			}
		}
	],
	[
		'.png',
		{
			name: 'PNG Image',
			launch: 'org.apps.imageviewer',
			icon: {
				category: 'mimetypes',
				name: 'application-image-png'
			}
		}
	],
	[
		'.md',
		{
			name: 'Markdown',
			launch: 'org.apps.editor',
			icon: {
				category: 'mimetypes',
				name: 'text-markdown'
			}
		}
	],
	[
		'.txt',
		{
			name: 'Text File',
			launch: 'org.apps.editor',
			icon: {
				category: 'mimetypes',
				name: 'application-document'
			}
		}
	],
	[
		'.pdf',
		{
			name: 'PDF',
			icon: {
				category: 'mimetypes',
				name: 'application-pdf'
			}
		}
	]
]);
