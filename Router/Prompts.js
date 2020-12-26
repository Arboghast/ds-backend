let Prompts = [
    {
        "prompt": "#include <bits/stdc++.h>|using namespace std;|#define size(arr) sizeof(arr)/sizeof(arr[0]);|int main(){|int a[5] = { 5, 2, 6, 3, 5};|int n = size(a);|sort((a), a + n);|for(int i = 0; i < n; i++){|cout << a[i];|}|return 0;|}",
        "language": "c++"
    },
    {
        "prompt": "#include<iostream>|using namespace std;|int main()|{|int a[4];|int i;|for ( i = 0; i < 4; i++ )|a[i] = 0;|for ( i = 0; i < 4; i++ )|cout << a[i] << ' ';|return 0;|}",
        "language": "c++"
    },
    {
        "prompt": "ifstream inFile;|string name;|int age;|inFile.open('file.txt');|getline(inFile, name);|inFile >> age;|cout << name << endl;|cout << age << endl;|inFile.close();",
        "language": "c++"
    },
    {
        "prompt": "#include <iostream>|using namespace std;|void function(){|cout << 'I am a function!' << endl;|}|int main()|{|function();|return 0;|}",
        "language": "c++"
    },
    {
        "prompt": "#include <iostream>|int main(){|std::cout <<'Hello World' << std::endl;|return 0;|}",
        "language": "c++"
    },
    {
        "prompt": "// basic file operations|#include <iostream>|#include <fstream>|using namespace std;|int main () {|ofstream myfile;|myfile.open ('example.txt');|myfile << 'Writing this to a file.';|myfile.close();|return 0;|}",
        "language": "c++"
    },
    {
        "prompt": "#include<iostream>|int main()|{|int array[8] = {1,2,3,4,5,6,7,8};|int i = 0;|while (i <= sizeof(array)/sizeof(int))|{|std::cout << array[i];|i++;|}|}",
        "language": "c++"
    },
    {
        "prompt": "// Below is C++ program|#include <iostream>|#include <thread>|#include <chrono>|using namespace std;|int main()|{|for (int i = 1; i <= 5; ++i)|{|cout << i << ' ';|this_thread::sleep_for(chrono::seconds(1));|}|cout << endl;|return 0;|}",
        "language": "c++"
    },
    {
        "prompt": "void float2Bytes(float val,byte* bytes_array){|// Create union of shared memory space|union {|float float_variable;|byte temp_array[4];|} u;|// Override bytes of union with float variable|u.float_variable = val;|// Assign bytes to input array|memcpy(bytes_array, u.temp_array, 4);|}",
        "language": "c++"
    },
    {
        "prompt": "for (int i = 0; i < m; i++)|{|for (int j = 0; j < n; j++)|{|cout << arr[i][j] << '';|}|// Newline for new row|cout << endl;|}",
        "language": "c++"
    }
];

module.exports = Prompts;