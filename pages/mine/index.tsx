import Link from 'next/link';
import { useState } from 'react';

// import { translateText } from '../ai/translation';
import Layout from '../../components/Layout';

// TODO: jisho integration
// - history
// - natural language analysis https://cloud.google.com/natural-language/docs/basics
// - kanji analysis https://jisho.org/api/v1/search/words?keyword=%E7%AD%94%E5%85%83
// - style https://paste.twilio.design/primitives/text

async function callTranslationApi(text: string) {
  // const response = await fetch('/api/translate', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ text }),
  // });
  // const json = await response.json();
  // console.log('json: ', json);
  // return json;
  return ['石に設定'];
}

async function callVisionApi(url: string) {
  // console.log('callVisionApi: ', url);
  // const response = await fetch('/api/vision', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ url }),
  // });
  // const json = await response.json();
  // console.log('json: ', json);
  // return json;
  return ['石に設定'];
}

const MinePage = () => {
  const [text, setText] = useState('');
  const [translated, setTranslated] = useState(['']);
  const [url, setURL] = useState('');
  const [read, setRead] = useState(null);

  const [translatedVision, setTranslatedVision] = useState('');

  const translate = async (e: any) => {
    e.preventDefault();
    setTranslated(await callTranslationApi(text));
  };

  const readImage = async (e: any) => {
    e.preventDefault();
    const result = await callVisionApi(url);
    setRead(result);
    setTranslatedVision(await callTranslationApi(result[0])[0]);
  };

  return (
    <Layout title='Home | Japanese RPG'>
      <h1>Scan 👁</h1>
      <form onSubmit={readImage}>
        <input
          type='url'
          value={url}
          onChange={(e) => setURL(e.target.value)}
          placeholder='Past an url...'
          style={{ width: '400px', padding: '0.5rem' }}
        />
        <button type='submit' style={{ padding: '0.5rem', cursor: 'pointer' }}>
          Read
        </button>
      </form>
      <p>{translatedVision}</p>
      <pre>{JSON.stringify(read, null, 2)}</pre>
    </Layout>
  );
};

export default MinePage;
