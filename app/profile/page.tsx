import ContentRenderer from '@/components/content-renderer';
import { getAllDocs } from '@/services/getDocsByPath';
import { profileDirectory } from '@/services/paths';

export default function () {
  const now = getAllDocs(profileDirectory, 'profile');
  return (
      <div>
        {now.map(async (item) => (
          <ContentRenderer key={item.title} content={item.content || ''} />
        ))}
      </div>
  );
}
