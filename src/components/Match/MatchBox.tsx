
const MatchBox = ({ vocab }: { vocab: string }) => {
    return (
        <div className='text-xl p-4 text-white flex justify-between cursor-pointer rounded-md'>
            <div className="flex gap-2">
                <span className='font-semibold'>{vocab}</span>
            </div>
        </div>
    );
};

export default MatchBox;