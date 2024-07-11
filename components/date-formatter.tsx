import { format, parseISO } from 'date-fns';

type Props = {
  dateString: string;
  formatType: 'short' | 'long';
};

const DateFormatter = ({ dateString, formatType }: Props) => {
  const date = parseISO(dateString);

  if (formatType === 'short')
    return <time itemProp="datePublished" dateTime={dateString}>{format(date, 'PP')}</time>;
  if (formatType === 'long')
    return <time itemProp="datePublished" dateTime={dateString}>{format(date, 'PPP')}</time>;
};

export default DateFormatter;
