function printName(name: string | null | undefined): void {
  if (name !== null && name !== undefined) {
    console.log(name.toUpperCase());
  } else {
    console.log('No name provided');
  }
}

printName(null); // Works fine
printName(undefined); // Works fine
printName('John'); // Works fine