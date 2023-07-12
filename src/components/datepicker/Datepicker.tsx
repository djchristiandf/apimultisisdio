import React, { useState } from 'react';
import { DatepickerContainer } from './styled';
import DatePicker, { DayValue } from 'react-modern-calendar-datepicker';

interface DatepickerProps {
  placeholder?: string;
  value: string;
  onChange: (date: string) => void;
}

const Datepicker: React.FC<DatepickerProps> = ({ placeholder, value, onChange }) => {
  const [selectedDate, setSelectedDate] = useState<DayValue | null>(null);

  const handleSelectDate = (date: DayValue) => {
    setSelectedDate(date);
    onChange(date ? `${date.year}-${date.month}-${date.day}` : '');
  };

  const handleFormatInputText = () => {
    return selectedDate ? `${selectedDate.day}/${selectedDate.month}/${selectedDate.year}` : '';
  };

  return (
    <DatepickerContainer>
      <DatePicker
        value={selectedDate}
        onChange={handleSelectDate}
        inputPlaceholder={placeholder}
        formatInputText={handleFormatInputText}
        shouldHighlightWeekends
        calendarClassName="calendar"
        calendarTodayClassName="today"
        calendarSelectedDayClassName="selected"
      />
    </DatepickerContainer>
  );
};

export default Datepicker;
