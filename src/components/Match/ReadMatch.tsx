import React, { useEffect, useState } from 'react';

import MatchBox from './MatchBox';
import { cn } from '../../utils';
import VocabBox from '../Learn/VocabBox';
import AllData from './AllData';
import { showErrorToast, showSuccessToast } from '../../ui/toast';

export interface AllDataProps {
  vocabL: string[][];
  vocabR: string[][];
}

const ReadMatch = () => {
  const { vocabL, vocabR }: AllDataProps = AllData;
  const [vocabListL, setVocabListL] = useState(vocabL);
  const [vocabListR, setVocabListR] = useState(vocabR);

  const [selected, setSelected] = useState<string | undefined>();
  const [correct, setCorrect] = useState<string | undefined>();

  const [correctList, setCorrectList] = useState<string[]>([]);

  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    if (search === '') {
      setVocabListL(vocabL);
      setVocabListR(vocabR);
      return;
    }
    setVocabListL(
      vocabL.filter((vocab) => {
        const name = vocab[1]
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase();
        const key = search
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase();
        return name.includes(key);
      })
    );
    setVocabListR(
      vocabR.filter((vocab) => {
        const name = vocab[1]
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase();
        const key = search
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase();
        return name.includes(key);
      })
    );
  }, [search, vocabL, vocabR]);

  useEffect(() => {
    if (selected && correct) {
      if (selected === correct) {
        setCorrectList([...correctList, selected])
        showSuccessToast('Correct');
        // console.log('Correct')
      } else {
        showErrorToast('Try again');
        // console.log('Try again')
      }
      setSelected(undefined);
      setCorrect(undefined);
      setLChecked(undefined);
      setRChecked(undefined);
    }
  }, [selected, correct, correctList]);

  const [LChecked, setLChecked] = useState<string>();
  const [RChecked, setRChecked] = useState<string>();

  return (
    <>
      <div className='flex justify-center mb-2'>
        <input
          className='bg-gray-800 text-white p-2 rounded-md'
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className='flex gap-6 justify-center'>
        <div className='flex gap-6 max-h-fit min-h-svh'>
          <div className='grid grid-cols-2 gap-2'>
            {vocabListL.map((vocab, index) => (
              <div key={'l' + index} className={cn('bg-gray-800 hover:bg-gray-900 max-h-fit', correctList.includes(vocab[0]) && 'hidden', LChecked === vocab[0] && '!bg-blue-400')} onClick={() => {
                if (!selected) {
                  setSelected(vocab[0]);
                  setLChecked(vocab[0])
                }
                else {
                  setCorrect(vocab[0])
                }
                setSearch('')
              }}>
                <MatchBox key={index} vocab={vocab[1]} />
              </div>
            ))}
          </div>
          <div className='grid grid-cols-2 gap-2'>
            {vocabListR.map((vocab, index) => (
              <div key={'r' + index} className={cn('bg-gray-800 hover:bg-gray-900 max-h-fit', correctList.includes(vocab[0]) && 'hidden', RChecked === vocab[0] && '!bg-blue-400')} onClick={() => {
                if (!selected) {
                  setSelected(vocab[0])
                  setRChecked(vocab[0])
                }
                else {
                  setCorrect(vocab[0])
                }
                setSearch('')
              }}>
                <MatchBox key={index} vocab={vocab[1]} />
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-2 ml-4 max-h-svh overflow-y-auto'>
          {correctList.map((vocab, index) => (
            <div key={'c' + index}>
              <VocabBox vocab={[vocab, vocabR.find((v) => v[0] === vocab)![1]]} isShow={true} />
            </div>
          ))}
        </div>
      </div >
    </>
  );
};

export default ReadMatch;