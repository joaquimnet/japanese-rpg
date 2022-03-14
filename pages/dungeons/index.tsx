import Link from 'next/link';
import Layout from '../../components/Layout';

// idea: to capture an item you have to "scratch" it to reveal its information
// every so often a "evolution" oportunity will be available. to evolve a kanji to the next level
// user must answer a quiz.

const KanaPage = () => (
  <Layout title='Kanji | Japanese RPG'>
    <h1>Kanji Dungeons</h1>
    <p>This is the kanji page</p>
    <p>
      <Link href='/'>
        <a>Go home</a>
      </Link>
    </p>
    <p>
      <Link href='/kana/加'>
        <a>加 </a>
      </Link>
      <Link href='/kana/減'>
        <a>減 </a>
      </Link>
      <Link href='/kana/速'>
        <a>速 </a>
      </Link>
      <Link href='/kana/熱'>
        <a>熱 </a>
      </Link>
      <Link href='/kana/入'>
        <a>入 </a>
      </Link>
    </p>
  </Layout>
);

export default KanaPage;
