import type { AppDispatch } from 'configs/store/store.ts';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
