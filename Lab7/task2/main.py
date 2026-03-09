

from models import Animal, Dog, Cat

def main():
    
    animal1 = Animal("GenericAnimal", 5, "Unknown")
    dog1 = Dog("Buddy", 3, "Golden Retriever")
    cat1 = Cat("Whiskers", 2, "Black")

    
    animals = [animal1, dog1, cat1]

    
    for animal in animals:
        print(animal)                  
        print(animal.info())          
        print(animal.speak())          
        print()

    #
    print(dog1.fetch("ball"))
    print(cat1.scratch())

if __name__ == "__main__":
    main()