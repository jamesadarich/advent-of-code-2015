export class Inputs {
  public static examples: any[] = [
    {
      input: { instructions: `inc a
jio a, +2
tpl a
inc a`,
register: 'a' }
      expected: 2
   }
  ];

  public static challenge: any = { instructions: `jio a, +18
inc a
tpl a
inc a
tpl a
tpl a
tpl a
inc a
tpl a
inc a
tpl a
inc a
inc a
tpl a
tpl a
tpl a
inc a
jmp +22
tpl a
inc a
tpl a
inc a
inc a
tpl a
inc a
tpl a
inc a
inc a
tpl a
tpl a
inc a
inc a
tpl a
inc a
inc a
tpl a
inc a
inc a
tpl a
jio a, +8
inc b
jie a, +4
tpl a
inc a
jmp +2
hlf a
jmp -7`,
register: 'b' }
}
