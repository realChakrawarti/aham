import NoteCard from "@/components/note-card";
import { getAllDocs } from "@/services/getDocsByPath";
import { noteDirectory } from "@/services/paths";

export default function NotePage() {
  const allNotes = getAllDocs(noteDirectory, "note");

  return (
    <div className="mx-auto container">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allNotes.map((note) => (
          <NoteCard key={note.slug} {...note} />
        ))}
      </div>
    </div>
  );
}
