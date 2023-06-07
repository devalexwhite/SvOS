import CalculatorIcon from '../../components/Icons/CalculatorIcon.svelte';
import ComputerIcon from '../../components/Icons/ComputerIcon.svelte';
import PaintBrushIcon from '../../components/Icons/PaintBrushIcon.svelte';

export const ApplicationByID = (id) => {
	return ApplicationList.find((app) => app.id == id);
};

export const ApplicationList = [
	{
		id: 'org.apps.files',
		name: 'Files',
		path: './Applications/FileManager/Application.svelte',
		icon: ComputerIcon
	},
	{
		id: 'org.apps.imageviewer',
		name: 'Image Viewer',
		path: './Applications/ImageViewer/Application.svelte',
		icon: ComputerIcon,
		options: {
			width: 500,
			height: 500
		}
	},
	{
		id: 'org.apps.editor',
		name: 'Text Editor',
		path: './Applications/TextEditor/Application.svelte',
		icon: ComputerIcon,
		options: {
			width: 700,
			height: 350
		}
	},
	{
		id: 'org.apps.calc',
		name: 'Calculator',
		path: './Applications/Calculator/Application.svelte',
		icon: CalculatorIcon,
		options: {
			width: 300,
			height: 400
		}
	},
	{
		id: 'org.apps.uadsviewer',
		name: 'UADS',
		path: './Applications/UADSViewer/Application.svelte',
		icon: PaintBrushIcon,
		options: {
			width: 700,
			height: 500
		}
	}
];
