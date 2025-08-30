-- Fix security issues from the linter

-- Add RLS policies for the notepad table
CREATE POLICY "Users can view their own notepad entries" 
ON public.notepad 
FOR SELECT 
USING (auth.uid()::text = id::text);

CREATE POLICY "Users can insert their own notepad entries" 
ON public.notepad 
FOR INSERT 
WITH CHECK (auth.uid()::text = id::text);

CREATE POLICY "Users can update their own notepad entries" 
ON public.notepad 
FOR UPDATE 
USING (auth.uid()::text = id::text);

CREATE POLICY "Users can delete their own notepad entries" 
ON public.notepad 
FOR DELETE 
USING (auth.uid()::text = id::text);

-- Fix the function search path issue
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;