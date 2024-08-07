import ListPreview from '@/components/list-preview';
import { getAllDocs } from '@/services/getDocsByPath';
import { notesDirectory } from '@/services/paths';

export default function NotePage() {
  const allNotes = getAllDocs(notesDirectory, 'note');

  return (
    <div className="divide-y divide-gray-800">
      {allNotes.map((note) => (
        <ListPreview key={note.slug} {...note} />
      ))}
    </div>
  );
}
