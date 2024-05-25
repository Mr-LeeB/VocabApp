import React from 'react';

import data from '../../utils/json/data1.json';
import VocabBox from './VocabBox';

const ReadData: React.FC = () => {
    type DataType = {
        [key: string]: string;
    };

    const dataType: DataType = data;
    const vocabData = Object.keys(data).map((key) => [key, dataType[key]]);
    vocabData.sort(() => Math.random() - 0.5);
    if (!vocabData) {
        return null;
    }
    return (
        <div className='grid grid-cols-3 gap-2'>
            {vocabData.map((vocab, index) => (
                <VocabBox key={index} vocab={vocab} />
            ))}
        </div>
    );
};

export default ReadData;