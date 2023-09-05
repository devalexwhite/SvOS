import DocumentIcon from '../../components/Icons/FileTypes/DocumentIcon.svg?dataurl=enc';
import SpreadSheetIcon from '../../components/Icons/FileTypes/SpreadSheetIcon.svg?dataurl=enc';
import ImageIcon from '../../components/Icons/FileTypes/ImageIcon.svg?dataurl=enc';
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
		icon: SpreadSheetIcon
	},
	image: {
		name: 'Image',
		icon: ImageIcon
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
