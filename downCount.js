export function downCount (num) {

  if (num < 1)
      return "Число не должно быть меньше единицы.";

  if (num > 10)
      return "Число не должно быть больше десяти.";

  if (!Number.isInteger(num))
      return "Число должно быть целым.";

  let result= String();

  for  (let i = num; i >= 1; i--) 
 
  result += i;

  return result
   
}


