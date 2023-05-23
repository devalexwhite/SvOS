import FileIcon from '../../components/Icons/FileIcon.svelte';
import SpreadSheetIcon from '../../components/Icons/SpreadSheet.svelte';

export const FileType = {
	document: {
		name: 'Document',
		icon: FileIcon
	},
	pdf: {
		name: 'PDF document',
		icon: FileIcon
	},
	spreadsheet: {
		name: 'Spreadsheet',
		icon: SpreadSheetIcon
	}
};
