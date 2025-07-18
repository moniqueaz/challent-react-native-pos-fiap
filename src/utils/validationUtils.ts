export const validateFields = (
  inputs: { name: string; label: string; value: string; required?: boolean }[],
  setErrors: (errors: Record<string, string>) => void
): boolean => {
  const newErrors: Record<string, string> = {};

  inputs.forEach((input) => {
    if (input.required && !input.value.trim()) {
      newErrors[input.name] = `${input.label} é obrigatório.`;
    }
  });

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};
