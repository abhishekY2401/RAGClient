import Stack from '@mui/material/Stack';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
        <div className='text-xl'><span className='font-semibold'>D</span>ocu<span className='font-semibold'>Q</span>uery</div>
        <Stack spacing={4} direction="row">
            <button className='border-solid border-2 border-slate-50 font-medium pl-4 pr-4 pt-1.5 pb-1.5 text-white rounded-lg'>register</button>
            <button className='font-medium pl-4 pr-4 pt-1.5 pb-1.5 bg-slate-50 text-gray-700 rounded-lg'>sign in</button>
        </Stack>
    </div>
  )
}

export default Navbar