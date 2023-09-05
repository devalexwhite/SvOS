import Icon from '../types/Icon';

export const ApplicationByID = (id) => {
	return ApplicationList.find((app) => app.id == id);
};

export const ApplicationList = [
	{
		id: 'org.apps.files',
		name: 'Files',
		appData: () => import('../../components/Applications/FileManager/Application.svelte'),
		icon: {
			category: 'places',
			name: 'folder-home'
		} as Icon
	},
	{
		id: 'org.apps.imageviewer',
		name: 'Image Viewer',
		appData: () => import('../../components/Applications/ImageViewer/Application.svelte'),
		icon: {
			category: 'places',
			name: 'folder-home'
		} as Icon,
		options: {
			width: 500,
			height: 500
		}
	},
	{
		id: 'org.apps.editor',
		name: 'Text Editor',
		appData: () => import('../../components/Applications/TextEditor/Application.svelte'),
		icon: {
			category: 'places',
			name: 'folder-home'
		} as Icon,
		options: {
			width: 700,
			height: 350
		}
	},
	{
		id: 'org.apps.calc',
		name: 'Calculator',
		appData: () => import('../../components/Applications/Calculator/Application.svelte'),
		icon: {
			category: 'apps',
			name: 'accessories-calculator'
		} as Icon,
		options: {
			width: 300,
			height: 400
		}
	},
	{
		id: 'org.apps.uadsviewer',
		name: 'UADS',
		appData: () => import('../../components/Applications/UADSViewer/Application.svelte'),
		icon: {
			category: 'apps',
			name: 'accessories-painting'
		} as Icon,
		options: {
			width: 700,
			height: 500
		}
	}
];
