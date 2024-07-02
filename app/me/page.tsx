import AboutMe from '@/components/about-me';
import ContentRenderer from '@/components/content-renderer';
import { getAllDocs } from '@/services/getDocsByPath';
import { nowDirectory } from '@/services/paths';

export default function () {
  const now = getAllDocs(nowDirectory, 'now');
  return (
    <div>
        <AboutMe />
      <div>
        {now.map(async (item) => (
          <ContentRenderer key={item.title} content={item.content || ''} />
        ))}
      </div>
    </div>
  );
}
