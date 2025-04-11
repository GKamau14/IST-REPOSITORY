class Parent: #Define the class Parent
    parentattr = 100
    #This inbuilt method is invoked  by parent () constructor when an object is created
    def __init__(self):

    #This method will be called whenever we want in the program    
        print("Calling parent constructor")    
    def parentmethod(self): #Define the method parentmethod
        print("Calling parent method")    

    #We define our own setattr and getattr methods to set and get the value of the attribute parentattr
    def setAttr(self, attr):
        Parent.parentattr = attr

    def getAttr(self):
        print("Parent attribute :", Parent.parentattr)