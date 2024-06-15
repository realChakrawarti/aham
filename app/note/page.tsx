import { HomeCard } from '@/components/home-card';
import NoteCard from '@/components/note-card';
import { getAllDocs } from '@/services/getDocsByPath';
import { noteDirectory } from '@/services/paths';

export default function NotePage() {
  const allNotes = getAllDocs(noteDirectory, 'note');

  return (
    <div className="mx-auto container">
      <div className="grid grid-cols-12 gap-4">
        {allNotes.map((note) => (
          <HomeCard
            className={'col-span-12 md:col-span-4'}
            key={note.title}
            {...note}
          />
        ))}
      </div>
    </div>
  );
}
