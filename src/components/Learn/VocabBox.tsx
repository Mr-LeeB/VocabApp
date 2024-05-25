import React, { useState } from "react";
import { cn } from "../../utils";

const VocabBox = ({ vocab, isShow = false }: { vocab: string[], isShow?: boolean }) => {
  const [show, setShow] = useState(isShow);
  const [selected, setSelected] = useState(false);
  return (
    <div className='bg-gray-800 text-xl p-4 text-white flex justify-between cursor-pointer hover:bg-gray-900 rounded-md'
      onClick={() => {
        if (!isShow) {
          setShow(!show);
          setSelected(true)
        }
      }}>
      <div className="flex gap-2">
        <span className='font-semibold'>{vocab[0]}</span>
        :
        <span className={cn(show ? 'inline-block' : 'hidden')}>{vocab[1]}</span>
      </div>
      {selected && <span className='text-green-500'>✓</span>}
    </div>
  );
};

export default VocabBox;