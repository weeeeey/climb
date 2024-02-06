import {
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { ControllerRenderProps } from 'react-hook-form';
import { CategoryType, MyFiledValues } from './new-types';
import { subCategories } from '@/config/data';
import MapBody from './map/map-body';

interface NewSelectProps {
    field: ControllerRenderProps<MyFiledValues, 'subCategory'>;
    selectedCate: CategoryType;
}

export const NewSubSelect = ({ field, selectedCate }: NewSelectProps) => {
    return (
        <div className="space-y-12">
            <FormItem>
                <FormLabel> 게시판</FormLabel>
                <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                >
                    <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="어느 게시판에 올릴까요?" />
                        </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        {subCategories[selectedCate].map((c, idx) => (
                            <SelectItem key={idx} value={c}>
                                {c}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <FormMessage />
            </FormItem>
            {field.value === 'spot' && <MapBody />}
        </div>
    );
};
