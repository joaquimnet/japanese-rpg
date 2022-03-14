import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Box, Button, Flex, Modal, ProgressBar } from 'tacti';

import Layout from '../../components/Layout';
import kana from '../../language/kana.json';
import { DisplayKanji } from '../../components/DisplayKanji/DisplayKanji';
import { KanjiBox } from '../../components/KanjiBox/KanjiBox';

const userAttributes = {
  huntSpeed: 200,
  huntEfficiency: 8,
};

const choice = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

const KanaPage = () => {
  const [progress, setProgress] = useState(0);
  const [progressBarInterval, setProgressBarInterval] = useState(null);
  const [despawnInterval, setDespawnInterval] = useState(null);
  const [field, setField] = useState([]);

  const [selectedKanji, setSelectedKanji] = useState(null);
  const [selectedKanjiCaptureProgress, setSelectedKanjiCaptureProgress] = useState(0);

  const spawnKana = () => {
    const kanaList = kana[choice(['hiragana', 'katakana'])];
    const selectedKana = choice(Object.values(kanaList).filter((a) => !field.includes(a)));
    selectedKana.color = `rgb(122, ${Math.floor(Math.random() * 255)}, 122)`;
    setField((field) => {
      if (field.length >= 100) return field;
      return [...field, selectedKana];
    });
  };

  useEffect(() => {
    setProgressBarInterval(
      setInterval(
        () =>
          setProgress((current) => {
            if (current >= 100) {
              spawnKana();
              return 0;
            }
            return current + userAttributes.huntEfficiency;
          }),
        1000 - userAttributes.huntSpeed,
      ),
    );
    return () => clearInterval(progressBarInterval);
  }, []);

  useEffect(() => {
    setDespawnInterval(setInterval(() => setField((current) => current.slice(1)), 10000));
    return () => clearInterval(despawnInterval);
  }, []);

  const onClickKanji = (kanji: string) => {
    setSelectedKanji(kanji);
  };

  return (
    <Layout title='Kana | Japanese RPG'>
      <section>
        <Box
          style={{
            backgroundColor: '#f3f3f3',
            margin: '1rem',
          }}
          height={3}
        >
          <h1>Kana Hunting Grounds</h1>
          <ProgressBar value={progress} maxValue={100} />
        </Box>
        {selectedKanji && (
          <Modal open={Boolean(selectedKanji)} onClose={() => setSelectedKanji(null)}>
            <Flex direction='column' justify='evenly' style={{ width: '100%' }}>
              <section>
                <DisplayKanji
                  content={selectedKanji.kana}
                  style={{ width: 'fit-content', fontSize: '1.8rem' }}
                  color={selectedKanji.color}
                />
                <span>{selectedKanji.romaji}</span>
                <hr />
              </section>
              <ProgressBar value={selectedKanjiCaptureProgress} maxValue={5} />
              <p style={{ margin: '0.5rem 0' }}>Hit this kana's reading to capture it!</p>
              <Flex>
                <Button
                  label={selectedKanji.romaji}
                  color='#ccc'
                  style={{ width: '48%', margin: '0.125rem auto' }}
                  onClick={() => {
                    if (selectedKanjiCaptureProgress >= 4) {
                      setSelectedKanjiCaptureProgress(0);
                      setSelectedKanji(null);
                      return;
                    }
                    setSelectedKanjiCaptureProgress((current) => current + 1);
                  }}
                />
                <Button label='ka' color='#ccc' style={{ width: '48%', margin: '0.125rem auto' }} />
                <Button label='ja' color='#ccc' style={{ width: '48%', margin: '0.125rem auto' }} />
                <Button label='ho' color='#ccc' style={{ width: '48%', margin: '0.125rem auto' }} />
                <Button label='te' color='#ccc' style={{ width: '48%', margin: '0.125rem auto' }} />
                <Button
                  label='myo'
                  color='#ccc'
                  style={{ width: '48%', margin: '0.125rem auto' }}
                />
              </Flex>
            </Flex>
          </Modal>
        )}
        <Flex
          direction='row'
          wrap='wrap'
          justify='center'
          style={{ width: '100%', transition: 'ease 0.2s' }}
        >
          {field.map((kana, i) => {
            return (
              <KanjiBox key={kana.kana + '-' + i} onClick={() => setSelectedKanji(kana)}>
                <DisplayKanji
                  content={kana.kana}
                  color={kana.color}
                  style={{ cursor: 'pointer', fontSize: '2rem' }}
                  compact
                />
              </KanjiBox>
            );
          })}
        </Flex>
      </section>
    </Layout>
  );
};

export default KanaPage;
