import { downCount } from "../downCount.js";

xdescribe("tests for downCount function", () => {
   const simple = 4;
    
   it("should operate count down", () => {
     expect(downCount(simple)).toBe(4321);
   }),
     it("should operate number less one", () => {
       expect(downCount(0)).toBe(`Число не должно быть меньше единицы.`);
     }),
     it("should operate number more ten", () => {
       expect(downCount(11)).toBe("Число не должно быть больше десяти.");
     });
     it("should operate number not a whole", () => {
      expect(downCount(2.2)).toBe("Число должно быть целым.");
    });
 });
 
 describe("tests for definePrime function", () => {
   
    
   it("should operate correctly with count down, number less one,  number more ten and number not a whole", () => {
     expect(downCount(4)).toBe(`4321`);
     expect(downCount(0)).toBe(`Число не должно быть меньше единицы.`);
     expect(downCount(11)).toBe("Число не должно быть больше десяти.");
     expect(downCount(2.2)).toBe("Число должно быть целым.");
   });
})

