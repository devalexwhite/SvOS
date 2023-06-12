import DocumentIcon from '../../components/Icons/FileTypes/DocumentIcon.svg?dataurl=enc';
import SpreadSheetIcon from '../../components/Icons/SpreadSheet.svelte';
import ImageIcon from '../../components/Icons/ImageIcon.svelte';
import FolderIcon from '../../components/Icons/FileTypes/FolderIcon.svg?dataurl=enc';

export const FileType = {
	document: {
		name: 'Document',
		icon: DocumentIcon
	},
	pdf: {
		name: 'PDF',
		icon: DocumentIcon
	},
	spreadsheet: {
		name: 'Spreadsheet',
		icon: DocumentIcon
	},
	image: {
		name: 'Image',
		icon: DocumentIcon
	},
	unknown: {
		name: 'Unknown',
		icon: DocumentIcon
	},
	folder: {
		name: 'Folder',
		icon: FolderIcon
	}
};
