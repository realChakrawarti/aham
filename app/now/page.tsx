import ContentRenderer from '@/components/content-renderer';
import { BasicDocumentProps } from '@/interfaces/doc';
import { getDocBySlug } from '@/services/getDocsByPath';
import { miscDirectory } from '@/services/paths';

export default function NowPage() {
  const nowPageContent = getDocBySlug<BasicDocumentProps>('now', miscDirectory);

  console.log(nowPageContent);

  return (
    <main>
      <h1 className="text-2xl font-hilmar">Now</h1>
      <p className="text-excerpt text-base pt-2 pb-4 font-slalom">
        Inspired by{' '}
        <a className='text-link hover:underline underline-offset-2 visited:text-action font-slalom' href="https://nownownow.com/about" target="_blank">
          Derek Sivers
        </a>
        , I am writing this page to share what I'm doing now.
      </p>
      <ContentRenderer content={nowPageContent.content || ''} />
    </main>
  );
}
