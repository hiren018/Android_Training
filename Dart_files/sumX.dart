void main()
{
  
  var list = [1,2,3,4,5,6,7];
  int n = list.length;
  int x = 7;
  
  print("The values which sum is ${x} are :");
  for(int i=0; i<n-1 ; i++)
  {
    int min = i;
    for(int j=i+1 ; j<n ; j++)
    {
      if((list[i] + list[j]) == x)
      {
        print("${list[i]} , ${list[j]}");
      }
    }
  }
    
  
}