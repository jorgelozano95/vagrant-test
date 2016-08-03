# vagrant-test

The main reason of this proyect is to configure vagrant on windows 8 and 10, using a box of centos7.

1   Download and install on you pc the following programs:
    
    git:        https://git-scm.com/downloads
    
    virtualbox: https://www.virtualbox.org/wiki/Downloads

    vagrant:    https://www.vagrantup.com/downloads.html
    
    Note: When using vagrant version 1.8.5 you need to make some tweak to make it work on this file  C:\HashiCorp\Vagrant\embedded\gems\gems\vagrant-1.8.5\plugins\guests\linux\cap\public_key.rb
    copy on the line 56 the folowing code:    chmod 0600 ~/.ssh/authorized_keys
    (for more info about this issue, please check on this link:  https://github.com/mitchellh/vagrant/issues/7610)
    
    
2   Make sure that after the previous program are installed at the enviroment variable **PATH** there is the following values, if not please add them: 
    
    C:\Program Files\Oracle\VirtualBox\

    C:\HashiCorp\Vagrant\bin

    C:\Program Files (x86)\Git\bin or C:\Program Files\Git\usr\bin
    
    
3   Open cmd.exe and go to your proyect file location i.e. **D:\GitHub\vagrant-test** and run  **vagrant init geerlingguy/centos7**
    
4   Run **vagrant up** (The first time it will download the centos7 box you just specified)

5   Access to the vagrant virtual  machine with the command **vagrant ssh**

Other basic commands are:

- **vagrant reload**  after changes at the VagrantFile to take efect

- **vagrant suspend** to hibernate the machine and then you can get back to work running **vagrant resume**

- **vagrant halt**  shutdown the the vagrant machine,  to turn on again the machine run the command **vagrant up**

- **vagrant destroy** completely removes the vagrant machine
