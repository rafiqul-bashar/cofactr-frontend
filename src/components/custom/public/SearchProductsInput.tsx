import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../../ui/input";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SearchProductsInput({
  mobileMenu = false,
  TOGGLE_MENU,
}) {
  const form = useForm();
  const navigate = useNavigate();
  function onSubmit(formData: { search_term: string }) {
    form.reset({ search_term: "" });

    mobileMenu && TOGGLE_MENU(false);
    navigate(`/products/search?${formData.search_term}`);
  }
  return (
    <Form {...form}>
      <form className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="search_term"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative h-10 w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10" />
                  <Input
                    placeholder="Search for product...."
                    {...field}
                    type="text"
                    className="pl-10 pr-3 py-2 text-md w-full border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-0"
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
